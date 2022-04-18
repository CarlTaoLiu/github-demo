import ajax from "./service";

export const getRepos = (username) => ajax.get(`/users/${username}/repos`)
export const getReposInfo = (username,reposname) => ajax.get(`/repos/${username}/${reposname}`)
