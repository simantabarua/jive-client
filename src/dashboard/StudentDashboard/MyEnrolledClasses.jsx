import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: paidClasses = [] } = useQuery(
    ["selectedClasses", user?.email],
    async () => {
      const response = await axiosSecure.get(
        `/enroll-class?email=${user?.email}`
      );
      return response.data;
    }
  );

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Classes</th>
            <th>Price</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>TransactionId</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paidClasses.map(
            (
              { classesNames, transactionId, price, date, quantity, status },
              index
            ) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <ol>
                    {classesNames.map((className, index) => (
                      <li key={index}>{className}</li>
                    ))}
                  </ol>
                </td>
                <td>{price}</td>
                <td>{date}</td>
                <td>{quantity}</td>
                <td>{transactionId}</td>
                <td>{status}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledClasses;
