export const getProducts = async () => {
  return [
    { id: "1", description: "Staubsauger" },
    { id: "2", description: "Mähdrescher" },
  ];
};

export const getNews = async () => {
    return [
      { id: "1", newsShort: "Das ist unser neuester Artikel" },
      { id: "2", newsShort: "Nur für kurze Zeit!" },
    ];
  };

  export const getFavoriteBrands = async () => {
    return [
      { id: "1", brand: "Bdidas" },
      { id: "2", brand: "Tiger" },
    ];
  };
