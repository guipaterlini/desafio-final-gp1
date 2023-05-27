import { useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import React from "react";
import AsideItem from "../../components/AsideItem";
import ListSection from "../../components/ListSection";
import { AsideMenu, Container } from "./styles";

type Menu = "products" | "categories" | "clients" | "orders" | "users";

export default function PagAdmin() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<Menu | null>(null);

  const handleMenuClick = (menu: Menu) => {
    setSection(menu);
  };

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <Container>
        <AsideMenu>
          <ul>
            <AsideItem
              onClick={() => handleMenuClick("products")}
              label="Produtos"
            />
            <AsideItem
              onClick={() => handleMenuClick("categories")}
              label="Categorias"
            />
            <AsideItem
              onClick={() => handleMenuClick("clients")}
              label="Clientes"
            />
            <AsideItem
              onClick={() => handleMenuClick("orders")}
              label="Pedidos"
            />
            <AsideItem
              onClick={() => handleMenuClick("users")}
              label="Usuários Admin"
            />
          </ul>
        </AsideMenu>
        <section>
          {/* {section === "products" && <ListSection data={productsData} />}
          {section === "categories" && <ListSection data={categoriesData} />}
          {section === "clients" && <ListSection data={clientsData} />}
          {section === "orders" && <ListSection data={ordersData} />} */}
          {section === "users" && (
            <ListSection
              title="Usuários Admin"
              columns={[
                { key: "email", label: "Email" },
                { key: "first_name", label: "Primeiro Nome" },
                { key: "last_name", label: "Último Nome" },
              ]}
            />
          )}
        </section>
      </Container>
    </main>
  );
}
