import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDashboard } from "react-icons/md";
const Headers = ({ isAuthenticated,user  }) => {
  console.log(user?.role);
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition= {{ duration: 1} }>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        {user?.role!=="admin"&&<Link to="/cart">
          <FiShoppingCart />
        </Link>}

        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: "0%" }}
          transition= {{ duration: 1.5} }
        >
          <Link to={isAuthenticated ? "/me" : "/login"}>
            {isAuthenticated ? <FaUser className="user"/> : <FiLogIn className="user"/>}
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Headers;
