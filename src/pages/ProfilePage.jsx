import React, { useState, useEffect } from 'react';
import "./ProfilePage.css";

const ProfilePage = () => {
  const defaultData = {
    fullName: '',
    email: '',
    phone: '',
    memberSince: 'Январь 2022'
  };

  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem('profileData');
    return saved ? JSON.parse(saved) : defaultData;
  });

  const handleProfileDataChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert("Ваши изменения были успешно сохранены!");
  };

  const handleEditProfile = () => alert("Редактирование профиля");

  const handleViewAllOrders = () => alert("Открытие полной истории заказов");

  return (
    <div className="profile-container">
      <h1 className="profile-title">Ваш профиль</h1>

      <div className="profile-grid">
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar" />
            <h2>{profileData.fullName || "Ваше имя"}</h2>
            <p>{profileData.email || "Email"}</p>
            <button className="btn-link" onClick={handleEditProfile}>Редактировать профиль</button>

            <div className="profile-menu">
              <div className="menu-item">Информация об аккаунте</div>
              <div className="menu-item">История заказов</div>
              <div className="menu-item">Сохраненные адреса</div>
              <div className="menu-item">Список желаний</div>
              <div className="menu-item">Настройки</div>
            </div>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-card">
            <h2>Информация об аккаунте</h2>
            <div className="profile-form">
              <div className="form-group">
                <label>Полное имя</label>
                <input
                  type="text"
                  value={profileData.fullName}
                  placeholder="Введите ваше имя"
                  onChange={(e) => handleProfileDataChange('fullName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  placeholder="Введите email"
                  onChange={(e) => handleProfileDataChange('email', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  placeholder="Введите номер телефона"
                  onChange={(e) => handleProfileDataChange('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Участник с</label>
                <input type="text" value={profileData.memberSince} disabled />
              </div>
            </div>

            <div className="loyalty">
              <span>Баллы лояльности: <strong>1 250</strong> (Золотой уровень)</span>
            </div>

            <button className="btn-save" onClick={handleSaveChanges}>Сохранить изменения</button>
          </div>

          <div className="profile-card">
            <h2>История заказов</h2>
            <div className="order-item">
              <div>#VZ-2023-0015 – Классические объемные часы</div>
              <div>49 999 ₽ – Доставлено</div>
            </div>
            <div className="order-item">
              <div>#VZ-2022-0128 – Ремешок для часов из кожи</div>
              <div>8 999 ₽ – Доставлено</div>
            </div>
            <div className="order-item">
              <div>#VZ-2022-0087 – Защита для часов</div>
              <div>2 999 ₽ – Доставлено</div>
            </div>
            <button className="btn-link" onClick={handleViewAllOrders}>Посмотреть все заказы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
