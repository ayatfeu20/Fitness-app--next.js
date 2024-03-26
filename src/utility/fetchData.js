export const exerciseOptions = {
  method: 'GET',
  url : 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10',
   headers: {
    'X-RapidAPI-Key': 'd0946f78e3msh9d824bf9dd4101ep1dbacdjsn01d6aff548a1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0946f78e3msh9d824bf9dd4101ep1dbacdjsn01d6aff548a1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  
  return data;
};
