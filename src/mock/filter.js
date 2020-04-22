const filterNames = [`default`, `date`, `rating`];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it
    };
  });
};

export {generateFilters};
