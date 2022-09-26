export function addUser(user)
{
    return {type: 'ADD_USER', user: user}
}

export function removeUser(id)
{
    return {type: 'DELETE_USER', id: id}
}

export function fetchUsers()
{
    return {type: 'FETCH_USERS'}
}