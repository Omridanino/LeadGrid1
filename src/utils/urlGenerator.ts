
/**
 * Creates a clean Netlify subdomain from a template name
 * Removes all special characters and adds timestamp for uniqueness
 */
export const createNetlifySubdomain = (templateName: string): string => {
  // Clean the template name - remove ALL special characters including dots
  const cleanName = templateName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove ALL special characters including dots
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .substring(0, 20); // Limit length

  // Ensure we have a valid subdomain name
  const validName = cleanName || 'site';
  
  // Add timestamp for uniqueness
  const timestamp = Date.now();
  
  return `${validName}-${timestamp}`;
};
