const projectController = {
  projectsHomes: async (req: any, res: any, next: any) => {
    try {
      res.status(200).json({
        message: "Welcome to the project home",
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = projectController;
