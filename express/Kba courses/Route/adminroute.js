import { Router } from "express";

const admin = Router();
const course = new Map();
const cart =new Map();


admin.post("/addcourse", (req, res) => {
  try {
    const { CourseName, CourseId, CourseType, Description, Price } = req.body;

    if (course.has(CourseName)) {
      return res.status(400).json({ msg: "Course already exists" });
    }

    course.set(CourseName, { CourseId,CourseType,Description, Price, });

    res.status(201).json({ msg: "Course successfully added" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});


admin.put("/updatecourse", (req, res) => {
  try {
    const { CourseName, CourseId, CourseType, Description, Price } = req.body;

    if (!course.has(CourseName)) {
      return res.status(404).json({ msg: "Course not found" });
    }

    course.set(CourseName, {
      CourseId,
      CourseType,
      Description,
      Price,
    });

    res.status(200).json({ msg: "Course successfully updated" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});


admin.patch("/patch", (req, res) => {
  try {
    const { CourseName, Price } = req.body;

    const result = course.get(CourseName);
    if (!result) {
      return res.status(404).json({ msg: "Course not found" });
    }

    course.set(CourseName, { ...result, Price});

    res.status(200).json({ msg: "Price updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});


admin.delete("/delete", (req, res) => {
  try {
    const { CourseName } = req.body;

    if (!course.has(CourseName)) {
      return res.status(404).json({ msg: "Course not found" });
    }

    course.delete(CourseName);
    res.status(200).json({ msg: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

admin.post("/add-to-cart", (req, res) => {
  try {
    const { CourseName, Price } = req.body;
    const UserName = req.name;

    if (!CourseName || !Price || !UserName) {
      return res.status(400).json({ msg: "CourseName, Price and UserName are required",   });
    }

    // If user cart does not exist
    if (!cart.has(UserName)) {
      cart.set(UserName, new Map());
    }

    const userCart = cart.get(UserName);

    // If item already exists → increase quantity
    if (userCart.has(CourseName)) {
      const item = userCart.get(CourseName);
      item.quantity += 1;
      userCart.set(CourseName, item);
    } else {
      userCart.set(CourseName, {   CourseName, Price,  quantity: 1,    });
    }

    res.status(200).json({
      msg: "Item added to cart",
      cart: Object.fromEntries(userCart),
    });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

export default admin;
