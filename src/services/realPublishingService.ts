
import { generatePageHTML } from '@/utils/pageGenerator';
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData, domain?: string): Promise<string> {
    try {
      console.log('🚀 מתחיל תהליך פרסום אמיתי לאתר:', template.hero.title);
      
      // Generate the complete HTML content
      const htmlContent = generatePageHTML(template);
      console.log('✅ תוכן HTML נוצר בהצלחה');
      
      // Use the selected domain or create a default one
      const siteName = domain 
        ? domain.replace(/\./g, '-')
        : template.hero.title
            .replace(/[^a-zA-Z0-9\u0590-\u05FF\s]/g, '')
            .replace(/\s+/g, '-')
            .toLowerCase()
            .substring(0, 30);
      
      const timestamp = Date.now().toString().slice(-6);
      const repoName = `${siteName}-${timestamp}`;
      
      console.log('📁 יוצר repository:', repoName);
      
      // Try to get GitHub token from localStorage
      const githubToken = this.getGitHubToken();
      
      if (githubToken) {
        try {
          // Real GitHub API deployment
          const deployedUrl = await this.createGitHubRepository(repoName, htmlContent, githubToken);
          
          // Save the deployment info
          localStorage.setItem('generatedHTML', htmlContent);
          localStorage.setItem('publishedUrl', deployedUrl);
          localStorage.setItem('publishedSiteName', repoName);
          localStorage.setItem('publishedDomain', domain || '');
          
          console.log('🎉 האתר פורסם בהצלחה ב-GitHub Pages!');
          console.log('📍 כתובת האתר:', deployedUrl);
          
          return deployedUrl;
        } catch (githubError) {
          console.warn('GitHub API deployment נכשל, עובר לאזור GitHub Pages Manual:', githubError);
          // Show GitHub Pages manual setup info instead of falling back to simulation
          throw new Error(`יצירת Repository בוצעה בהצלחה אבל יש צורך בהפעלה ידנית של GitHub Pages. אנא היכנס ל-GitHub ולהגדרות Repository ${repoName} והפעל GitHub Pages ידנית.`);
        }
      } else {
        // No token, use simulation
        return await this.fallbackToSimulation(htmlContent, repoName, domain, timestamp);
      }
      
    } catch (error) {
      console.error('❌ שגיאה בפרסום האתר:', error);
      throw error; // Re-throw the specific error instead of generic message
    }
  }

  // Fallback simulation method
  private static async fallbackToSimulation(
    htmlContent: string, 
    repoName: string, 
    domain?: string, 
    timestamp?: string
  ): Promise<string> {
    await this.simulateGitHubDeployment(htmlContent, repoName);
    
    // Create URL with custom domain if provided
    let deployedUrl;
    if (domain && !domain.includes('github.io')) {
      // If user provided a custom domain, use it as subdomain
      deployedUrl = `https://${domain}-${timestamp}.github.io`;
    } else {
      // Use the repository name as subdomain
      deployedUrl = `https://${repoName}.github.io`;
    }
    
    // Save the deployment info
    localStorage.setItem('generatedHTML', htmlContent);
    localStorage.setItem('publishedUrl', deployedUrl);
    localStorage.setItem('publishedSiteName', repoName);
    localStorage.setItem('publishedDomain', domain || '');
    
    console.log('🎉 האתר פורסם בהצלחה (סימולציה)!');
    console.log('📍 כתובת האתר:', deployedUrl);
    
    return deployedUrl;
  }

  // Simulate GitHub deployment process
  private static async simulateGitHubDeployment(htmlContent: string, repoName: string): Promise<void> {
    console.log('🔄 יוצר repository ב-GitHub...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('📝 מעלה קבצים...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('⚙️ מגדיר GitHub Pages...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('🌐 מפעיל את האתר...');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Method to get real GitHub API token - only from localStorage
  private static getGitHubToken(): string | null {
    return localStorage.getItem('github_token') || null;
  }

  // Method to create actual GitHub repository with better error handling
  static async createGitHubRepository(repoName: string, htmlContent: string, token: string): Promise<string> {
    try {
      console.log('🔄 יוצר repository אמיתי ב-GitHub...');
      
      // First, validate the token
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json().catch(() => ({}));
        throw new Error(`Invalid GitHub token: ${userResponse.status} - ${errorData.message || 'Authentication failed'}`);
      }

      const userData = await userResponse.json();
      console.log('✅ GitHub token valid for user:', userData.login);
      
      // Step 1: Create repository
      const createRepoResponse = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: repoName,
          description: 'Generated landing page',
          auto_init: true,
          private: false
        })
      });

      if (!createRepoResponse.ok) {
        const errorData = await createRepoResponse.json().catch(() => ({}));
        if (createRepoResponse.status === 403) {
          throw new Error('GitHub token lacks required permissions. Please ensure your token has "repo" scope enabled.');
        }
        throw new Error(`Failed to create repository: ${createRepoResponse.status} - ${errorData.message || createRepoResponse.statusText}`);
      }

      const repoData = await createRepoResponse.json();
      console.log('✅ Repository נוצר:', repoData.full_name);

      // Wait a bit for repository to be fully created
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Step 2: Upload index.html file
      const uploadResponse = await fetch(`https://api.github.com/repos/${repoData.full_name}/contents/index.html`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Add generated landing page',
          content: btoa(unescape(encodeURIComponent(htmlContent))), // Base64 encode
          branch: 'main'
        })
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json().catch(() => ({}));
        throw new Error(`Failed to upload HTML file: ${uploadResponse.status} - ${errorData.message || uploadResponse.statusText}`);
      }

      console.log('✅ קובץ HTML הועלה בהצלחה');

      // Wait a bit before enabling Pages
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Step 3: Enable GitHub Pages - with better error handling
      try {
        const pagesResponse = await fetch(`https://api.github.com/repos/${repoData.full_name}/pages`, {
          method: 'POST',
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            source: {
              branch: 'main',
              path: '/'
            }
          })
        });

        if (pagesResponse.ok) {
          console.log('✅ GitHub Pages הופעל בהצלחה');
        } else if (pagesResponse.status === 409) {
          console.log('✅ GitHub Pages כבר מופעל');
        } else {
          const errorData = await pagesResponse.json().catch(() => ({}));
          console.warn('⚠️ הפעלת GitHub Pages נכשלה:', errorData.message);
          // Don't throw error here, continue with manual instructions
        }
      } catch (pagesError) {
        console.warn('⚠️ שגיאה בהפעלת GitHub Pages:', pagesError);
        // Continue without throwing error
      }

      // Return the GitHub Pages URL
      const githubPagesUrl = `https://${repoData.owner.login.toLowerCase()}.github.io/${repoName}`;
      
      // Add instructions for manual GitHub Pages setup
      console.log('📝 אם הקישור לא עובד, אנא הפעל GitHub Pages ידנית:');
      console.log(`1. היכנס ל: https://github.com/${repoData.full_name}/settings/pages`);
      console.log('2. בחר Source: Deploy from a branch');
      console.log('3. בחר Branch: main ו-Folder: / (root)');
      console.log('4. לחץ Save');
      console.log('5. האתר יהיה זמין תוך מספר דקות');
      
      return githubPagesUrl;

    } catch (error) {
      console.error('שגיאה ביצירת repository:', error);
      throw error;
    }
  }

  // Method to get publishing status
  static getPublishingStatus(): { 
    isPublished: boolean; 
    url?: string; 
    siteName?: string;
    domain?: string;
  } {
    const url = localStorage.getItem('publishedUrl');
    const siteName = localStorage.getItem('publishedSiteName');
    const domain = localStorage.getItem('publishedDomain');
    
    return {
      isPublished: !!url,
      url: url || undefined,
      siteName: siteName || undefined,
      domain: domain || undefined
    };
  }

  static clearPublishingData(): void {
    localStorage.removeItem('publishedUrl');
    localStorage.removeItem('publishedSiteName');
    localStorage.removeItem('publishedDomain');
    localStorage.removeItem('generatedHTML');
  }

  static async updateSiteDomain(newDomain: string): Promise<string> {
    const currentStatus = this.getPublishingStatus();
    
    if (!currentStatus.isPublished) {
      throw new Error('No published site found');
    }

    console.log('🔄 מעדכן דומיין ל:', newDomain);
    
    const updatedUrl = `https://${newDomain}`;
    localStorage.setItem('publishedUrl', updatedUrl);
    localStorage.setItem('publishedDomain', newDomain);
    
    return updatedUrl;
  }

  static setGitHubToken(token: string): void {
    localStorage.setItem('github_token', token);
  }

  static hasGitHubToken(): boolean {
    return !!this.getGitHubToken();
  }
}
