export const getUsers = () => {
  fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify({
      query: `{
          user(id: 1) {
            id
            name
          }
        }`,
    }),
  }).then(response => {
    return response.json();
  })
};


