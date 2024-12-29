async function likecode(){
    return new Promise((like)=>{
        like("like the post successfully.")
    })
}
async function commentcode(){
    return new Promise((commentposted)=>{
        commentposted("comment posted successfully in the post.")
    })
}
async function createPost(){
    var post=new Promise((cpost)=>{
        cpost("post created successfully...");
    })
    var [post,comment,like]=await Promise.all([post,commentcode(),likecode()])
    //[function commentcode(): Promise<any>] in this the any means it will return any type like object or string,
    console.log(post);
    console.log(comment);
    console.log(like);
}
createPost();


//git commands
//git commit --amnd to add something to existing file    
