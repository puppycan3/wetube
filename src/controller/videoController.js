export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search videos");
export const upload = (req, res) => res.send("upload videos");
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video #${req.params.id}`);
};
