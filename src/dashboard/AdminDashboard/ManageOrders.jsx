import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const {
    isLoading,
    data: orders = [],
    refetch,
  } = useQuery(["orders", user?.email], async () => {
    const response = await axiosSecure.get(`/orders?email=${user?.email}`);
    console.log(response);
    return response.data;
  });

  const changeOrderStatus = async (orderId, status) => {
    try {
      await axiosSecure.put(`/orders/${orderId}`, { status });
      Swal.fire({
        icon: "success",
        text: "Order status changed successfully",
      });
      refetch();
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed to change order status",
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Total Paid</th>
              <th>Payment Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ _id, email, transactionId, date, price }, index) => (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{transactionId}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => changeOrderStatus(_id, "approve")}
                    className="btn btn-sm btn-primary"
                  >
                    Approve Order
                  </button>
                  <button
                    onClick={() => changeOrderStatus(_id, "declined")}
                    className="btn btn-sm btn-error"
                  >
                    Decline Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrders;
