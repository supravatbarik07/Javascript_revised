const user={
    username:'supravat',
    password:'abc123',
    welcomeMessage:function(){
        console.log(`Hy ${this.username} welcomes to my website`)
    }
}
user.welcomeMessage();