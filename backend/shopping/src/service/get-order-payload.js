const GetOrderPayload = async (userId, order, event) => {
  if (order) {
    const payload = {
      event: event,
      data: { userId, order },
    };

    return payload;
  } else {
    return;
  }
};

export { GetOrderPayload };
