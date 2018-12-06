const user = 
{
    id: 1,
    ad: "Burcu"
};

const friends = 
[
    {
        id:11,
        ad:"Ceylan"
    },
    {
        id:12,
        ad:"Kezban"
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


getUser()
.then((data) => {
    return data.id;
})
.then((data2) => {
     return getFriends(data2);
})
.then((data3) => {
    console.log(user.ad , " ısmındekı kullanıcının arkadasları : " , "\n", data3);
});



















