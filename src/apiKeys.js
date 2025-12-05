// Files for store APIkeys and other JSON url info
export const comicvine_apiKey = import.meta.env.VITE_COMICVINE_API_KEY; // APIkey for comicvine

export const JSON_URLformat = `&format=json`; // URL shorthand that converts data into JSON format. Put this at the end of your URL call.

// Comic Vine
export const comicvineURL = `https://comicvine.gamespot.com/api`;
export const fieldListURL = `&field_list=`;

// Var for Limit the number of Results
// apiResultsLimitURL + resultsLimit
// put results limit after your apiKey
export let apiResultsLimitURL = `&limit=`;
export let resultsLimit = ``;
