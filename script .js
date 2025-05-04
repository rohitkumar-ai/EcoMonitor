function doPost(e) {
    const data = JSON.parse(e.postData.contents);
    
    // Send email
    MailApp.sendEmail({
      to: "your-email@gmail.com",
      subject: `New Suggestion: ${data.subject}`,
      htmlBody: `
        <h2>New Suggestion Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Priority:</strong> ${data.priority}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  }