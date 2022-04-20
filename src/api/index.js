export const getUsers = async () => {
  const request = await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      query: `{
          user(id: 1) {
            id
            name
          }
        }`,
    }),
  })
  return await request.json();
};


