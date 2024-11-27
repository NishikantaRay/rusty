import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'urn:ietf:wg:oauth:2.0:oob'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

async function createGoogleMeet(name, email, dateTime) {
  const event = {
    summary: 'Appointment Booking',
    description: `Appointment with ${name}`,
    start: { dateTime },
    end: { dateTime: new Date(new Date(dateTime).getTime() + 30 * 60000).toISOString() },
    attendees: [{ email }],
    conferenceData: {
      createRequest: {
        requestId: 'meet-' + Date.now(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data.hangoutLink;
}

export default createGoogleMeet;
