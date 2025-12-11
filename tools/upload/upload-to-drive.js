import fs from 'fs';
import { google } from 'googleapis';

async function main() {
  const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  const folderId = process.env.GDRIVE_FOLDER_ID;
  const filePath = process.env.FILE_TO_UPLOAD;

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/drive.file']
  });

  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: filePath.split('/').pop(),
    parents: [folderId]
  };

  const media = {
    mimeType: 'text/csv',
    body: fs.createReadStream(filePath)
  };

  const res = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  });

  console.log('Uploaded file ID:', res.data.id);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
