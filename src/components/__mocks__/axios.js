
export default {
  get: jest.fn().mockResolvedValue({
    data: {
      meals: [],
      categories: [],
    },
  }),
};
