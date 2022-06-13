import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Lich from "../../assets/images/datlich.png";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const Calendar = () => {
  const [open, setOpen] = useState(false); 
  const [open1, setOpen1] = useState(false);

  // đăng kí form bđ
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // đăng kí form kt

  const onSubmit = (data) => console.log(data);
  const handelOpen = () => {
    setOpen(true); // mở to hình
  };
  const handelOpen1 = () => {
    setOpen1(true); // mở to hình
  };

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="Calendar__container">
      {open && (
        <div className="Calendar__slice">
          <div className="sliceWrapper">
            <AiOutlineClose
              className="Calendar__slice-close"
              onClick={() => setOpen(false)}
            />
            {/* Form ĐẶt lịch hẹn BT*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="h3">ĐẶT LỊCH HẸN</h3>
              {/* Form lấy họ tên  start*/}
              <div className="Form_calender">
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    name="name"
                    className="slice-input"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    name="phone"
                    className="slice-input"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d{10}$/,
                    })}
                  />
                </div>
              </div>
              {/* Form lấy họ tên  end*/}

              {/* Form lấy địa chỉ bắt đầu */}
              <div className="Form_calender">
                <div>
                  <select className="slice-selection" {...register("area")}>
                    <option>Chọn khu vực</option>
                    <option>Hồ Chí Minh</option>
                    <option>Hà nội</option>
                    <option>Miền Nam</option>
                    <option>Miền Trung</option>
                    <option>Miền Tây</option>
                    <option>Tây Nguyên</option>
                  </select>
                  <select className="slice-selection" {...register("branch")}>
                    <option>Chi nhánh 1</option>
                    <option>Chi nhánh 2</option>
                    <option>Chi nhánh 3</option>
                  </select>
                </div>
              </div>
              {/* Form lấy địa chỉ kết thúc */}

              {/* Form lấy địa chỉ bắt đầu */}
              <div className="Form_calender">
                <div>
                  <select className="selection-date" {...register("date")}>
                    <option>
                      {dateState.toLocaleDateString({
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </option>
                    <option>Ngày mai</option>
                  </select>
                  <select className="selection-hous" {...register("hous")}>
                    <option>Chọn khu vực</option>
                    <option>Hồ Chí Minh</option>
                    <option>Hà nội</option>
                    <option>Miền Nam</option>
                    <option>Miền Trung</option>
                    <option>Miền Tây</option>
                    <option>Tây Nguyên</option>
                  </select>
                  <select className="slice-selection" {...register("service")}>
                    <option>Chọn dịch vụ</option>
                    <option>Béo</option>
                    <option>Triệt lông</option>
                    <option>Mụn</option>
                    <option>Rỗ </option>
                    <option>Phun xăm</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Thêm ghi chú"
                  className="slice-textarea"
                  {...register("text")}
                />
                {Object.keys(errors).length !== 0 && (
                  <ul className="err">
                    {errors.name?.type === "required" && (
                      <li>Name is required</li>
                    )}
                    {errors.phone?.type === "required" && (
                      <li>phone is required</li>
                    )}
                    {errors.phone?.type === "pattern" && (
                      <li>phone is pattern</li>
                    )}
                  </ul>
                )}
              </div>
              <div className="Form_calender">
                <div>
                  <button className="Slice-Advise-btn">
                    <FaMapMarkerAlt
                      style={{
                        paddingRight: "10px",
                        fontSize: "20px",
                        marginBottom: "-3px",
                      }}
                    />
                    VỊ TRÍ GẦN BẠN
                  </button>
                  <button className="Slice-submit-btn">GỬI YÊU CẦU</button>
                </div>
              </div>
              {/* Form lấy địa chỉ kết thúc*/}
            </form>
            {/*  Form ĐẶt lịch hẹn KT */}
          </div>
        </div>
      )}
      {open1 && (
        <div className="requestion">
          <div class="Chatbox" id="myForm">
          <AiOutlineClose
            className="Calendar__slice-close"
            onClick={() => setOpen1(false)}
          />
            <form action="" class="form-container">
              <h1>Chat Box</h1>
              <textarea
                placeholder="Bạn hãy nhập lời nhắn.."
                name="msg"
                required
              ></textarea>
              <button type="submit" class="btn">
                Gửi
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="Calendar__block">
        <div className="Calendar__block-container">
          <div className="Calendar-content">
            <h4>ĐẶT LỊCH TRỰC TUYẾN</h4>
            <p>Nhanh tay đăng ký để nhận được nhiều ưu đãi nhất.</p>
            <button className="Calendar-btn" onClick={() => handelOpen()}>
              <FaRegCalendarAlt
                style={{
                  paddingRight: "8px",
                  fontSize: "25px",
                  marginBottom: "-4px",
                }}
              />
              ĐẶT LỊCH HẸN
            </button>
            <h4>BẠN CẦN ĐƯỢC TƯ VẤN ?</h4>
            <button className="Advise-btn" onClick={() => handelOpen1()}>
              <BiMessageDetail
                style={{
                  paddingRight: "6px",
                  fontSize: "30px",
                  marginBottom: "-9px",
                }}
              />
              YÊU CẦU TƯ VẤN
            </button>

            {/* tìm địa chỉ bđ */}
            <button className="Advise-btn">
              <FaMapMarkerAlt
                style={{
                  paddingRight: "10px",
                  fontSize: "20px",
                  marginBottom: "-3px",
                }}
              />
              TÌM CHI NHÁNH GẦN BẠN
            </button>
            {/* tìm địa chỉ kt */}
          </div>
        </div>
        <div className="Calendar-image">
          <img src={Lich} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
