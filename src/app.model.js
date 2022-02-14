import mockList from "./mock/mock-list";

const getHealthList = () => {
  const providers = {};
  mockList.forEach((item) => {
    if (!providers[item.provider]) {
      providers[item.provider] = [];
    }
    providers[item.provider].push(item);
  });
  return providers;
};

export const AppModel = {
  getHealthList,
};
