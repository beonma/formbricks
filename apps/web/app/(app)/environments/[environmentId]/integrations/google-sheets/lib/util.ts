export const extractSpreadsheetIdFromUrl = (url: string): string => {
  const regex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error("Invalid Google Sheets URL");
  }
};

export const constructGoogleSheetsUrl = (spreadsheetId: string): string => {
  const baseUrl = "https://docs.google.com/spreadsheets/d/";
  return baseUrl + spreadsheetId;
};

export const isValidGoogleSheetsUrl = (url: string): boolean => {
  // Regular expression to match Google Sheets URL format
  const googleSheetsUrlRegex = /^https:\/\/docs\.google\.com\/spreadsheets\/d\/[a-zA-Z0-9-_]+\/?$/;
  return googleSheetsUrlRegex.test(url);
};
