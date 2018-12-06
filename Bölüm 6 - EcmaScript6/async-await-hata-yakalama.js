const user = {
    id: 1,
    ad: "Burcu"
};


const friends = [
    {
        id: 11,
        ad: "Ceylan"
          },
    {
        id: 12,
        ad: "Kezban"
          }
      ];

const getUser = () => {
    return new Promise((resolve, reject) => {
        resolve(user);
    })
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        resolve(friends);
    })
};


async function async_await() {
        try {
            const user = await getUser();
            const friends = await getFriends();
            console.log(user.ad, " isimli kullanıcının arkadasları : \n", friends);
        } catch (err) {
            console.log(err);
        };
};

        async_await();
