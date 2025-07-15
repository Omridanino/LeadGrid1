
import { generatePageHTML } from '@/utils/pageGeneratorNew';
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
      
      // Get GitHub token from localStorage - THIS IS THE KEY PART
      const githubToken = this.getGitHubToken();
      
      if (!githubToken) {
        throw new Error('לא נמצא GitHub token. אנא הזן token תקין בצעד ההגדרה.');
      }

      // REAL GitHub API deployment - NO MORE SIMULATION!
      const deployedUrl = await this.createGitHubRepository(repoName, htmlContent, githubToken);
      
      // Save the deployment info
      localStorage.setItem('generatedHTML', htmlContent);
      localStorage.setItem('publishedUrl', deployedUrl);
      localStorage.setItem('publishedSiteName', repoName);
      localStorage.setItem('publishedDomain', domain || '');
      
      console.log('🎉 האתר פורסם בהצלחה ב-GitHub Pages!');
      console.log('📍 כתובת האתר:', deployedUrl);
      
      return deployedUrl;
      
    } catch (error) {
      console.error('❌ שגיאה בפרסום האתר:', error);
      throw error;
    }
  }

  // Method to get real GitHub API token - only from localStorage
  private static getGitHubToken(): string | null {
    return localStorage.getItem('github_token') || null;
  }

  // Method to create actual GitHub repository with better logging
  static async createGitHubRepository(repoName: string, htmlContent: string, token: string): Promise<string> {
    try {
      console.log('🔄 יוצר repository אמיתי ב-GitHub...');
      
      // First, validate the token by getting user info
      console.log('🔍 בודק את הטוקן...');
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json().catch(() => ({}));
        console.error('❌ שגיאה באימות הטוקן:', errorData);
        throw new Error(`GitHub token לא תקין: ${userResponse.status} - ${errorData.message || 'Authentication failed'}`);
      }

      const userData = await userResponse.json();
      console.log('✅ GitHub token תקין עבור משתמש:', userData.login);
      
      // Step 1: Create repository
      console.log('📁 יוצר repository חדש...');
      const createRepoResponse = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: repoName,
          description: 'Generated landing page - Created with LeadGrid',
          auto_init: true,
          private: false
        })
      });

      if (!createRepoResponse.ok) {
        const errorData = await createRepoResponse.json().catch(() => ({}));
        console.error('❌ שגיאה ביצירת repository:', errorData);
        if (createRepoResponse.status === 403) {
          throw new Error('הטוקן לא מאושר לפעולה זו. וודא שיש לטוקן הרשאות "repo".');
        }
        throw new Error(`נכשל ביצירת repository: ${createRepoResponse.status} - ${errorData.message || createRepoResponse.statusText}`);
      }

      const repoData = await createRepoResponse.json();
      console.log('✅ Repository נוצר בהצלחה:', repoData.full_name);

      // Wait for repository to be fully created
      console.log('⏳ ממתין ליצירת repository...');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Step 2: Upload index.html file
      console.log('📤 מעלה קובץ HTML...');
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
        console.error('❌ שגיאה בהעלאת קובץ:', errorData);
        throw new Error(`נכשל בהעלאת קובץ HTML: ${uploadResponse.status} - ${errorData.message || uploadResponse.statusText}`);
      }

      console.log('✅ קובץ HTML הועלה בהצלחה');

      // Wait before enabling Pages
      console.log('⏳ ממתין לפני הפעלת Pages...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Step 3: Enable GitHub Pages
      console.log('🌐 מפעיל GitHub Pages...');
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
          console.log('💡 תצטרך להפעיל Pages ידנית ב-Settings');
        }
      } catch (pagesError) {
        console.warn('⚠️ שגיאה בהפעלת GitHub Pages:', pagesError);
        console.log('💡 תצטרך להפעיל Pages ידנית ב-Settings');
      }

      // Return the GitHub Pages URL
      const githubPagesUrl = `https://${repoData.owner.login.toLowerCase()}.github.io/${repoName}`;
      
      console.log('🎉 האתר פורסם בהצלחה!');
      console.log('📍 כתובת האתר:', githubPagesUrl);
      console.log('📁 Repository:', `https://github.com/${repoData.full_name}`);
      
      return githubPagesUrl;

    } catch (error) {
      console.error('❌ שגיאה ביצירת repository:', error);
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
    localStorage.removeRemove('publishedDomain');
    localStorage.removeItem('generatedHTML');
  }

  static setGitHubToken(token: string): void {
    localStorage.setItem('github_token', token);
    console.log('✅ GitHub token נשמר');
  }

  static hasGitHubToken(): boolean {
    return !!this.getGitHubToken();
  }
}
