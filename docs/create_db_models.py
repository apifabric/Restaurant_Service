import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Create an engine
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Base class
Base = declarative_base()

# Table definitions
class User(Base):
    """description: Handles user authentication, profile management, and user preferences."""
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)
    preferences = Column(String, nullable=True)

class Restaurant(Base):
    """description: Manages restaurant listings, details, and availability."""
    __tablename__ = 'restaurants'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone_number = Column(String, nullable=True)

class MenuItem(Base):
    """description: Manages menu items, pricing, and availability for each restaurant."""
    __tablename__ = 'menu_items'
    id = Column(Integer, primary_key=True, autoincrement=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=False)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)

class Order(Base):
    """description: Handles order creation, tracking, and history."""
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=False)
    date_ordered = Column(DateTime, default=datetime.datetime.now, nullable=False)
    status = Column(String, nullable=False)

class Payment(Base):
    """description: Manages payment processing, transaction history, and refunds."""
    __tablename__ = 'payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    amount = Column(Float, nullable=False)
    date_processed = Column(DateTime, default=datetime.datetime.now, nullable=False)
    status = Column(String, nullable=False)

class Notification(Base):
    """description: Sends notifications to users and restaurants about order status, promotions, and updates."""
    __tablename__ = 'notifications'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=True)
    message = Column(String, nullable=False)
    date_sent = Column(DateTime, default=datetime.datetime.now, nullable=False)

class Delivery(Base):
    """description: Manages delivery logistics, driver assignments, and tracking."""
    __tablename__ = 'deliveries'
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    driver_id = Column(Integer, nullable=False)
    delivery_status = Column(String, nullable=False)
    estimated_time = Column(DateTime, nullable=True)

class Review(Base):
    """description: Handles user reviews and ratings for restaurants and delivery experiences."""
    __tablename__ = 'reviews'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=True)
    date_posted = Column(DateTime, default=datetime.datetime.now, nullable=False)

class Driver(Base):
    """description: Manages driver information and assignments for deliveries."""
    __tablename__ = 'drivers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    phone_number = Column(String, nullable=True)

class Promo(Base):
    """description: Manages promotional campaigns and discounts for restaurants."""
    __tablename__ = 'promos'
    id = Column(Integer, primary_key=True, autoincrement=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=False)
    description = Column(String, nullable=True)
    discount_percent = Column(Float, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

class UserPreference(Base):
    """description: Stores user preferences related to notifications and privacy settings."""
    __tablename__ = 'user_preferences'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    preference_name = Column(String, nullable=False)
    preference_value = Column(String, nullable=True)

class RestaurantSchedule(Base):
    """description: Stores operational hours and special schedules for restaurants."""
    __tablename__ = 'restaurant_schedules'
    id = Column(Integer, primary_key=True, autoincrement=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    open_time = Column(String, nullable=False)
    close_time = Column(String, nullable=False)

# Create all tables
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Insert some sample data
users = [
    User(username='john_doe', email='john@example.com', password_hash='hashedpassword1'),
    User(username='jane_smith', email='jane@example.com', password_hash='hashedpassword2'),
]

restaurants = [
    Restaurant(name='Pasta Palace', address='123 Noodle St', phone_number='555-1234'),
    Restaurant(name='Burger Bistro', address='456 Patty Ave', phone_number='555-5678'),
]

menu_items = [
    MenuItem(restaurant_id=1, name='Spaghetti', price=12.5),
    MenuItem(restaurant_id=2, name='Cheeseburger', price=9.99),
]

orders = [
    Order(user_id=1, restaurant_id=1, status='Pending'),
    Order(user_id=2, restaurant_id=2, status='Completed'),
]

payments = [
    Payment(order_id=1, amount=12.5, status='Success'),
    Payment(order_id=2, amount=9.99, status='Success'),
]

notifications = [
    Notification(user_id=1, message='Your order is on the way!', date_sent=datetime.datetime.now()),
    Notification(user_id=2, restaurant_id=2, message='New order received from Jane', date_sent=datetime.datetime.now()),
]

deliveries = [
    Delivery(order_id=1, driver_id=1, delivery_status='En route', estimated_time=datetime.datetime.now() + datetime.timedelta(minutes=30)),
    Delivery(order_id=2, driver_id=2, delivery_status='Delivered', estimated_time=datetime.datetime.now()),
]

reviews = [
    Review(user_id=1, restaurant_id=1, rating=5, comment='Amazing pasta!', date_posted=datetime.datetime.now()),
]

drivers = [
    Driver(name='Mike Johnson', phone_number='555-6789'),
    Driver(name='Sara Connor', phone_number='555-9876'),
]

promos = [
    Promo(restaurant_id=1, description='10% off Italian cuisine', discount_percent=10.0, start_date=datetime.datetime.now(), end_date=datetime.datetime.now() + datetime.timedelta(days=30)),
]

user_preferences = [
    UserPreference(user_id=1, preference_name='email_notifications', preference_value='true'),
]

restaurant_schedules = [
    RestaurantSchedule(restaurant_id=1, day_of_week='Monday', open_time='09:00 AM', close_time='10:00 PM'),
]

# Add the records to the session
session.add_all(users + restaurants + menu_items + orders + payments + notifications + deliveries + reviews + drivers + promos + user_preferences + restaurant_schedules)

# Commit the records
session.commit()

# Close the session
session.close()
