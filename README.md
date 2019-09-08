# Backend Challenge


# Usage

### Running

```
npm install
npm run dev
```

### Generating new token

```
localhost:3000/newToken/:userId
E.g
localhost:3000/newToken/4
->> Generates new jwt for the user with an id of 4
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiaWF0IjoxNTY3OTExNTk1LCJleHAiOjE1Njc5MTUxOTV9.YucqW4uIKiemBCI0PAxVR8n_2or90wEsBiWPw-BTaQs


New tokens will expire after an hour
>> 
```

### Getting Users

```
curl http://localhost:3000/users
[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net"," ......
```

### Getting albums for authenticated user

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "auth:myAuthToken"  http://localhost:3000/albums

>>
[{"userId":4,"id":31,"title":"adipisci laborum fuga laboriosam"},{"userId":4,"id":32,"title":"reiciendis dolores a ut qui debitis non quo labore"},{"userId":4,"id":33,"title":"iste eos nostrum"},{"userId":4,"id":34,"title":"cumque voluptatibus rerum architecto blanditiis"},{"userId":4,"id":35,"title":"et impedit nisi quae magni necessitatibus sed aut pariatur"},{"userId":4,"id": .....
```

### Getting specific album by Id
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "auth:myAuthToken"  http://localhost:3000/albums/5

>> 
[{"userId":1,"id":5,"title":"eaque aut omnis a"}]
```

### Getting photos for authenticated user

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "auth:myAuthToken"  http://localhost:3000/photos


>>
[[{"albumId":11,"id":501,"title":"asperiores exercitationem voluptates qui amet quae necessitatibus facere","url":"https://via.placeholder.com/600/cda4c0","thumbnailUrl":"https://via.placeholder.com/150/cda4c0"},{"albumId":11,"id":502,"title":"omnis qui sit et","url":"https://via.placeholder.com/600/74e371","thumbnailUrl":"https://via.placeholder.com/150/74e371"},{"albumId":11,"id":503,"title":"modi voluptas fugiat eos","url":"https://via.placeholder.com/600/9022fb","thumbnailUrl":"https://via.placeholder.com/150/9022fb"},{"albumId":11,"id":504,"title":"sapiente id vel dignissimos","url":"https://via.placeholder.com/600/99dd3f","thumbnailUrl":"https://via.placeholder.com/150/99dd3f"},{"albumId":11,"id":505,"title":"quam voluptatibus ea saepe","url":"https://via.placeholder.com/600/1cb49b","thumbnailUrl":"https://via.placeholder.com/150/1cb49b"},{"albumId":11,"id":506,"title":"maxime unde repudiandae similique reiciendis harum","url":"https://via.placeholder.com/600/91f992","thumbnailUrl":"https://via.placeholder.com/150/91f992"},{"albumId":11,"id":507,"title":"doloremque nulla ab in sed possimus","url":"https://via.placeholder.com/600/dfe687","thumbnailUrl":"https://via.placeholder.com/150/dfe687"},{"a

```



### Getting Specific photo by id


```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "auth:myAuthToken"  http://localhost:3000/photos/2

>>
[{"albumId":1,"id":2,"title":"reprehenderit est deserunt velit ipsam","url":"https://via.placeholder.com/600/771796","thumbnailUrl":"https://via.placeholder.com/150/771796"}]

```
