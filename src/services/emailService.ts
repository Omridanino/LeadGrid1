
export interface EmailNotificationData {
  customerEmail: string;
  customerName: string;
  domain: string;
  hostingPlan: string;
  orderId: string;
  totalAmount: number;
  loginDetails: {
    adminUrl: string;
    username: string;
    password: string;
  };
}

export class EmailService {
  static async sendPurchaseConfirmation(data: EmailNotificationData): Promise<boolean> {
    try {
      const emailContent = this.generatePurchaseConfirmationEmail(data);
      
      // בפרודקשן זה ישלח דרך Resend או SendGrid
      console.log('📧 שולח אימייל ללקוח:', data.customerEmail);
      console.log('נושא:', 'הדומיין שלך מוכן! - Leadgrid');
      console.log('תוכן:', emailContent);
      
      // כרגע זה לוג בלבד, בפרודקשן זה יהיה שליחת אימייל אמיתית
      return true;
    } catch (error) {
      console.error('שליחת אימייל נכשלה:', error);
      return false;
    }
  }

  private static generatePurchaseConfirmationEmail(data: EmailNotificationData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; direction: rtl;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">🎉 הדומיין שלך מוכן!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Leadgrid - פתרונות דיגיטליים מקצועיים</p>
        </div>

        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">שלום ${data.customerName},</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #34495e;">
            תודה שבחרת ב-Leadgrid! הדומיין שלך <strong>${data.domain}</strong> נרכש בהצלחה והאתר שלך כבר חי באינטרנט.
          </p>

          <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #27ae60; margin-top: 0;">פרטי הרכישה:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>דומיין:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.domain}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>תוכנית אחסון:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.hostingPlan}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>מספר הזמנה:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.orderId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>סה"כ:</strong></td>
                <td style="padding: 8px 0; color: #27ae60; font-weight: bold;">₪${data.totalAmount}</td>
              </tr>
            </table>
          </div>

          <div style="background: #e8f5e8; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #27ae60; margin-top: 0;">🌐 פרטי הגישה לאתר שלך:</h3>
            <p><strong>כתובת האתר:</strong> <a href="https://${data.domain}" style="color: #3498db;">https://${data.domain}</a></p>
            <p><strong>ניהול האתר:</strong> <a href="${data.loginDetails.adminUrl}" style="color: #3498db;">${data.loginDetails.adminUrl}</a></p>
            <p><strong>שם משתמש:</strong> ${data.loginDetails.username}</p>
            <p><strong>סיסמה:</strong> ${data.loginDetails.password}</p>
          </div>

          <div style="background: #fff3cd; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="color: #856404; margin-top: 0;">⏰ מתי האתר יהיה פעיל?</h4>
            <ul style="color: #856404; margin: 0; padding-right: 20px;">
              <li>הדומיין יהיה פעיל תוך 15 דקות</li>
              <li>תעודת SSL תהיה פעילה תוך שעה</li>
              <li>האתר כבר זמין לצפייה</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://${data.domain}" 
               style="background: #27ae60; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
              🚀 צפה באתר שלך עכשיו
            </a>
          </div>

          <div style="border-top: 1px solid #ddd; padding-top: 20px; margin-top: 30px;">
            <h4 style="color: #2c3e50;">צריך עזרה?</h4>
            <p style="color: #7f8c8d; margin: 5px 0;">
              📧 אימייל: <a href="mailto:info.leadgrid@gmail.com">info.leadgrid@gmail.com</a>
            </p>
            <p style="color: #7f8c8d; margin: 5px 0;">
              💬 וואטסאפ: <a href="https://wa.me/972544866116">+972-54-486-6116</a>
            </p>
          </div>
        </div>

        <div style="background: #34495e; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            תודה שבחרת ב-Leadgrid<br>
            הארגמן 3 ב | ע.מ: 207514837
          </p>
        </div>
      </div>
    `;
  }
}
