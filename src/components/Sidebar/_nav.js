export default {
  items: [
    {
      name: "Göstergeler",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "YENI"
      }
    },
    {
      title: true,
      name: "Yönetim"
    },
    {
      name: "Verbis Giriş",
      url: "/verbis",
      icon: "icon-user",
      children: [
        {
          name: "Genel Tanımlar",
          url: "/geneltanimlar",
          icon: "icon-tag",
        },
        {
          name: "Süreç Sahibi",
          url: "/components/social-buttons",
          icon: "icon-tag"
        },
        {
          name: "Verbis KV",
          url: "/components/cards",
          icon: "icon-tag"
        },
        {
          name: "Denetim Faaliyeti",
          url: "/components/forms",
          icon: "icon-tag"
        },
        {
          name: "Süreç İyileştirme",
          url: "/components/modals",
          icon: "icon-tag"
        },
        {
          name: "Raporlar",
          url: "/components/switches",
          icon: "icon-tag"
        }
      ]
    },
    {
      name: "KV Talepleri",
      url: "/icons",
      icon: "icon-star",
      children: [
        {
          name: "Yeni Talep",
          url: "/icons/font-awesome",
          icon: "icon-star",
          badge: {
            variant: "secondary",
            text: "4.7"
          }
        },
        {
          name: "Talep Listesi",
          url: "/icons/simple-line-icons",
          icon: "icon-star"
        }
      ]
    },
    {
      name: "Sorgula",
      url: "/widgets",
      icon: "icon-magnifier",
      badge: {
        variant: "info",
        text: "YENI"
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: "Seçenekler"
    },
    {
      name: "Ayarlar",
      url: "/charts",
      icon: "icon-settings",
      children: [
        {
          name: "Kullanıcılar",
          url: "/login",
          icon: "icon-star"
        },
        {
          name: "Verbis Entegrasyon",
          url: "/register",
          icon: "icon-star"
        },
        {
          name: "Seçenekler",
          url: "/404",
          icon: "icon-star"
        }
      ]
    },
    {
      name: "Yardım",
      url: "/500",
      icon: "icon-support"
    },
    {
      name: "Çıkış",
      url: "/pages",
      icon: "icon-logout"
    }
  ]
};
