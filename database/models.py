# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 14, 2024 14:13:23
# Database: sqlite:////tmp/tmp.GzRT5r0lSK/Restaurant_Service/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Driver(SAFRSBaseX, Base):
    """
    description: Manages driver information and assignments for deliveries.
    """
    __tablename__ = 'drivers'
    _s_collection_name = 'Driver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Restaurant(SAFRSBaseX, Base):
    """
    description: Manages restaurant listings, details, and availability.
    """
    __tablename__ = 'restaurants'
    _s_collection_name = 'Restaurant'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    MenuItemList : Mapped[List["MenuItem"]] = relationship(back_populates="restaurant")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="restaurant")
    OrderList : Mapped[List["Order"]] = relationship(back_populates="restaurant")
    PromoList : Mapped[List["Promo"]] = relationship(back_populates="restaurant")
    RestaurantScheduleList : Mapped[List["RestaurantSchedule"]] = relationship(back_populates="restaurant")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="restaurant")



class User(SAFRSBaseX, Base):
    """
    description: Handles user authentication, profile management, and user preferences.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)
    preferences = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    OrderList : Mapped[List["Order"]] = relationship(back_populates="user")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="user")
    UserPreferenceList : Mapped[List["UserPreference"]] = relationship(back_populates="user")



class MenuItem(SAFRSBaseX, Base):
    """
    description: Manages menu items, pricing, and availability for each restaurant.
    """
    __tablename__ = 'menu_items'
    _s_collection_name = 'MenuItem'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    restaurant_id = Column(ForeignKey('restaurants.id'), nullable=False)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("MenuItemList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Sends notifications to users and restaurants about order status, promotions, and updates.
    """
    __tablename__ = 'notifications'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    restaurant_id = Column(ForeignKey('restaurants.id'))
    message = Column(String, nullable=False)
    date_sent = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("NotificationList"))
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class Order(SAFRSBaseX, Base):
    """
    description: Handles order creation, tracking, and history.
    """
    __tablename__ = 'orders'
    _s_collection_name = 'Order'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    restaurant_id = Column(ForeignKey('restaurants.id'), nullable=False)
    date_ordered = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("OrderList"))
    user : Mapped["User"] = relationship(back_populates=("OrderList"))

    # child relationships (access children)
    DeliveryList : Mapped[List["Delivery"]] = relationship(back_populates="order")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="order")



class Promo(SAFRSBaseX, Base):
    """
    description: Manages promotional campaigns and discounts for restaurants.
    """
    __tablename__ = 'promos'
    _s_collection_name = 'Promo'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    restaurant_id = Column(ForeignKey('restaurants.id'), nullable=False)
    description = Column(String)
    discount_percent = Column(Float, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("PromoList"))

    # child relationships (access children)



class RestaurantSchedule(SAFRSBaseX, Base):
    """
    description: Stores operational hours and special schedules for restaurants.
    """
    __tablename__ = 'restaurant_schedules'
    _s_collection_name = 'RestaurantSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    restaurant_id = Column(ForeignKey('restaurants.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    open_time = Column(String, nullable=False)
    close_time = Column(String, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("RestaurantScheduleList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: Handles user reviews and ratings for restaurants and delivery experiences.
    """
    __tablename__ = 'reviews'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    restaurant_id = Column(ForeignKey('restaurants.id'), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String)
    date_posted = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    restaurant : Mapped["Restaurant"] = relationship(back_populates=("ReviewList"))
    user : Mapped["User"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)



class UserPreference(SAFRSBaseX, Base):
    """
    description: Stores user preferences related to notifications and privacy settings.
    """
    __tablename__ = 'user_preferences'
    _s_collection_name = 'UserPreference'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    preference_name = Column(String, nullable=False)
    preference_value = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserPreferenceList"))

    # child relationships (access children)



class Delivery(SAFRSBaseX, Base):
    """
    description: Manages delivery logistics, driver assignments, and tracking.
    """
    __tablename__ = 'deliveries'
    _s_collection_name = 'Delivery'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('orders.id'), nullable=False)
    driver_id = Column(Integer, nullable=False)
    delivery_status = Column(String, nullable=False)
    estimated_time = Column(DateTime)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("DeliveryList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    """
    description: Manages payment processing, transaction history, and refunds.
    """
    __tablename__ = 'payments'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('orders.id'), nullable=False)
    amount = Column(Float, nullable=False)
    date_processed = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)
