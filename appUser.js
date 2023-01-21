const AppUser = {
    props:{
        title: String,
        users: {
            type: Array,
            default: [],
            description: "User list"

        }
    },
    template: `
    <p>{{title}}</p>
    <div class="user" v-for="user in users" :key="user.username">
        <p>Username:{{user.username}}</p>
    </div>
    `
}