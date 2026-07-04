export function contactEmailTemplate({
  name,
  email,
  phone,
  serviceType,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - Visa Mate</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f4f4f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    .header {
      background-color: #8d0f35;
      color: #ffffff;
      padding: 30px 40px;
      text-align: center;
      border-bottom: 4px solid #b52c52;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 40px;
    }
    .field {
      margin-bottom: 24px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 16px;
    }
    .field:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #64748b;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .value {
      font-size: 16px;
      color: #0f172a;
      font-weight: 500;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #8d0f35;
      padding: 16px;
      margin-top: 8px;
      border-radius: 0 4px 4px 0;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px 40px;
      text-align: center;
      font-size: 12px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Consultation Request</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color: #8d0f35; text-decoration: none;">${email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone}" style="color: #8d0f35; text-decoration: none;">${phone}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Service Type</div>
        <div class="value" style="display: inline-block; background: #fff0f4; color: #8d0f35; padding: 6px 14px; border-radius: 999px; font-size: 14px; font-weight: 600; border: 1px solid #f7a8bd;">${serviceType}</div>
      </div>
      
      <div class="field">
        <div class="label">Message / Query</div>
        <div class="value message-box">${message}</div>
      </div>
    </div>
    
    <div class="footer">
      This email was generated securely by your Visa Mate website contact form.
    </div>
  </div>
</body>
</html>
  `;
}
