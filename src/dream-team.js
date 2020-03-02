module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = []

  for (let i = 0; i < members.length; i ++){
    if (typeof members[i] === "string"){
      let init = members[i].match(/\w/i)[0];
      teamName.push(init.toUpperCase());
    }
  }

  return teamName.sort().join("");
};