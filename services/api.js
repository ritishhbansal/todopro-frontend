exports.tasksave=async (data)=>{
    const response=await fetch("http://todopro-backend.vercel.app/api/tasks",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const result=await response.json();
    return result;
}

exports.fetchdata=async (id) => {
    const response = await fetch(`http://todopro-backend.vercel.app/api/data/${id}`,{
        method:"GET"
    });

    const result = await response.json();
    return result;
}

exports.postlogin = async (userdata) => {
    const response = await fetch('http://todopro-backend.vercel.app/api/login', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userdata)
    });

    const result = await response.json();
    return result;
}

exports.postsignup = async (userdata) => {
    const response = await fetch("http://todopro-backend.vercel.app/api/signup", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userdata)
    });

    const result = await response.json();
    return result;
}

exports.logout = async () => {
    const response = await fetch('http://todopro-backend.vercel.app/api/logout', {
        method: "GET"
    })

    const result = await response.json();
    return result;
}

exports.taskdelete = async (id) =>{
    const response = await fetch(`http://todopro-backend.vercel.app/api/taskdelete/${id}`, {
        method:"GET"
    })

    const result = await response.json();
    return result;
}

exports.edittask = async (id) => {
    const response = await fetch(`http://todopro-backend.vercel.app/api/edit/${id}`, {
        method:"GET"
    })

    const result = await response.json();
    return result;
}

exports.updatetask = async (data,id) => {
    const response = await fetch(`http://todopro-backend.vercel.app/api/updatetask/${id}`, {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    const result = await response.json();
    return result;
}

exports.findemail = async (data) => {
    const response = await fetch("http://todopro-backend.vercel.app/api/findemail", {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    const result = await response.json();
    return result;
}

exports.updatepass = async (data, id) => {
    const response = await fetch(`http://todopro-backend.vercel.app/api/updatepass/${id}`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    const result = await response.json();
    return result;
}

exports.otp = async (data) => {
    const response = await fetch("http://todopro-backend.vercel.app/api/otp", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    const result = await response.json();
    return result;
}

exports.complete = async (id) => {
    const response = await fetch(`http://todopro-backend.vercel.app/api/complete/${id}`, {
        method:"GET"
    })

    const result = await response.json();
    return result;
}
