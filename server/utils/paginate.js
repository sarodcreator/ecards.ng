export const paginate = (data, page = 1, limit = 10) => {
  const total = data.length;
  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    data: data.slice(start, end),
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
      hasNextPage: end < total,
      hasPrevPage: start > 0,
    },
  };
};
