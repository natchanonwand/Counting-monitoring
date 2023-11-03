from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import json
import mysql.connector


app = Flask(__name__)

app.debug = True
CORS(app)
host = "localhost"
user = "root"
password = "1234"
db = "test"

@app.route("/api/countrecords_counttray")       #path of api  
def read():     #GET(READ) Method
    mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
    mycursor = mydb.cursor(dictionary=True)
    mycursor.execute("SELECT * FROM countrecords_counttray")
    myresult = mycursor.fetchall()
    return make_response(jsonify(myresult), 200)

@app.route("/api/countrecords_counttray/<Lot_id>")       #path of api  
def readbyid(Lot_id):     #GET(READ) Method
    mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
    mycursor = mydb.cursor(dictionary=True)
    sql = "SELECT * FROM countrecords_counttray WHERE Lot_id = %s"
    val = (Lot_id,)
    mycursor.execute(sql, val)
    myresult = mycursor.fetchall()
    return make_response(jsonify(myresult), 200)

@app.route("/api/countrecords_counttray/Timestamp/<Lot_id>")
def get_timestamp_by_lot_id(Lot_id):
    mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
    mycursor = mydb.cursor(dictionary=True)
    sql = "SELECT Timestamp FROM countrecords_counttray WHERE Lot_id = %s"
    val = (Lot_id,)
    mycursor.execute(sql, val)
    Timestamp = [record['Timestamp'] for record in mycursor.fetchall()]
    return make_response(jsonify({"Timestamp": Timestamp}), 200)

@app.route("/api/countrecords_counttray/data/<Lot_id>")
def get_data_by_lot_id(Lot_id):
    mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
    mycursor = mydb.cursor(dictionary=True)
    sql = "SELECT ASSY_input, Direction, Good, Machine_ID, NG, Substrate, TTL, Timestamp, badmark, count_id FROM countrecords_counttray WHERE Lot_id = %s"
    val = (Lot_id,)
    mycursor.execute(sql, val)
    data = mycursor.fetchall()
    return make_response(jsonify(data), 200)


@app.route("/api/countrecords_counttray", methods = ['POST'])       #path of api  
def create():
    data = request.get_json()

    if isinstance(data, list):
        # If the data is a list of JSON objects, insert each object into the database
        mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
        mycursor = mydb.cursor(dictionary=True)
        
        for item in data:
            sql = "INSERT INTO countrecords_counttray (Lot_id, Direction, Timestamp, Count, Machine_ID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            val = (item['Lot_id'], item['Direction'], item['Timestamp'], item['Machine_ID'], item['Substrate'], item['TTL'], item['badmark'], item['ASSY_input'], item['NG'], item['Good'])

            
            mycursor.execute(sql, val)
            mydb.commit()

        return make_response(jsonify({"message": "Data inserted successfully"}), 200)
    else:
        return make_response(jsonify({"error": "Invalid data format"}), 400)

@app.route("/api/countrecords_counttray/<Lot_id>", methods = ['DELETE'])       #path of api  
def delete(Lot_id):     #DELETE(DELETE) Method
    mydb = mysql.connector.connect(host=host, user=user, password=password, db=db)
    mycursor = mydb.cursor(dictionary=True)
    sql = "DELETE FROM countrecords_counttray WHERE Lot_id = %s"
    val = (Lot_id,)
    mycursor.execute(sql, val)
    mydb.commit()
    return make_response(jsonify({"rowcount": mycursor.rowcount }), 200)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

