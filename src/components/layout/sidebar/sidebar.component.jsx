import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="border-end p-3 vh-100">
      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Add new contact"
          type="text"
        />
        <Link to={"/add"} className="btn btn-outline-success">
          New
        </Link>
      </div>
      <ul className="list-unstyled list-group">
        <li
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"contact/1"}
            className="text-dark"
          >
            Contact1
          </Link>
        </li>
        <li
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"contact/2"}
            className="text-dark"
          >
            Contact2
          </Link>
        </li>
      </ul>
    </div>
  );
};
