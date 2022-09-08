import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCourseShowing } from "../../Slices/course";

const CourseShowing = () => {
  const dispatch = useDispatch();
  /*eslint-disable*/
  useEffect(() => {
    dispatch(getCourseShowing());
  }, []);
  const { courses, error } = useSelector((state) => state.course);
  console.log("course", courses, error);
  return <div>CourseShowing</div>;
};

export default CourseShowing;
