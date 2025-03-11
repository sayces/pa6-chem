import React, { useEffect, useState } from "react";
import services_styles from "./_services.module.scss";
import { getAllServices } from "../../../api/apiServices";
import { useNavigate } from "react-router-dom";

export default function Services() {

  const navigate = useNavigate();
  const [services, setServices] = useState<any[]>([]);

  const fetchAllServices = () => {
    getAllServices().then((data) => {
      setServices(data);
    });
  };
  useEffect(() => {
    fetchAllServices();
  }, []);
  return (
    <div className={services_styles.services_page}>
      <a onClick={() => navigate("/services")}><h1>Услуги и прайс</h1></a>

      <div className={services_styles.services_container}>
        <p>Что вас интересует?</p>
        <ul className={services_styles.services_list}>
          {services.map((service) => (
            <li className={services_styles.services_item} key={service.id}>
              <p className={services_styles.service_name}>{service.serviceName}</p>
              <span className={services_styles.tooltip}>(i)</span>
              <p className={services_styles.description}>{service.description} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
