type Topic = {
  title: string;
  route: string;
  subTopics?: Topic[];
  expanded?: boolean;
};
