
from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
import random
import json

app = Flask(__name__, static_url_path='',
            static_folder='build')
cors = CORS(app, resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/")
def init():
    print("handle called")
    return app.send_static_file('index.html')

@app.route("/run")
def run():
    text = {
                "name": "Random Int 1",
                "number": random.randint(0, 1000)
            }
    return json.dumps(text)


def update_sensor_data(sensor_type, message):
    for x in range(600):
        data = {
            "name": sensor_type,
            "message": x
        }
        print(f"Updating sensor data type: {sensor_type} Data: {data['message']}")
        socketio.emit(sensor_type, json.dumps({"data": data}))
        x = x + 1


@socketio.event
def request():
    print('Data being requested')
    # await sendData()
    update_sensor_data('speed', 300)
    pass


@socketio.on('*')
async def catch_all(self, event, sid, data):
    print("catch all")
    pass


@socketio.on('connect')
def connect():
    print('connect ')


@socketio.on('disconnect')
def disconnect():
    print('disconnect ')

if __name__ == '__main__':
    socketio.run(app, debug=True)


#
# import json
#
# import aiohttp_cors
# import socketio
# import asyncio
# from aiohttp import web
# import random
#
#
# # create a Socket.IO server
# sio = socketio.AsyncServer(cors_allowed_origins="*")
#
# async def update_sensor_data(sensor_type, message):
#     for x in range(600):
#         data = {
#             "name": sensor_type,
#             "message": x
#         }
#         print(f"Updating sensor data type: {sensor_type} Data: {data['message']}")
#         await sio.emit(sensor_type, {"data": data})
#         x = x + 1
#
# @sio.event
# async def request(sid):
#     print('Data being requested', sid)
#     # await sendData()
#     await update_sensor_data('speed', 300)
#     pass
#
#
# @sio.on('*')
# async def catch_all(self, event, sid, data):
#     pass
#
#
# @sio.event
# async def connect(sid, environ, auth):
#     print('connect ', sid)
#
#
# @sio.event
# async def disconnect(sid):
#     print('disconnect ', sid)
#
#
# async def handle(request):
#     print("handle called")
#     return web.FileResponse('./build/index.html')
#
#
# async def handleRun(request):
#     text = {
#         "name": "Random Int 1",
#         "number": random.randint(0, 1000)
#     }
#     return web.Response(text=json.dumps(text))
#
#
# async def sendData():
#     data = [
#         {
#             "name": "Random Int 1",
#             "number": random.randint(0, 1000)
#         },
#         {
#             "name": "Random Int 2",
#             "number": random.randint(1001, 2000)
#         },
#         {
#             "name": "Random Int 3",
#             "number": random.randint(2001, 3000)
#         }
#     ]
#     print("sending Data")
#     await sio.emit('update', {"data": data})
#
#
#
#     # data = {
#     #     "name": sensor_type,
#     #     "message": message
#     # }
#     # print(f"Updating sensor data type: {sensor_type} Data: {message}")
#     # await sio.emit(sensor_type, {"data": data})
#
#
# app = web.Application()
#
# # app.add_routes([web.get('/', handle),
# #                 web.get('/{name}', handle),
# #                 web.get('/run', handleRun)])
# cors = aiohttp_cors.setup(app, defaults={
#     "*": aiohttp_cors.ResourceOptions(
#         allow_credentials=True,
#         expose_headers="*",
#         allow_headers="*",
#     )
# })
#
# root = cors.add(app.router.add_resource("/"))
# cors.add(root.add_route("GET", handle))
#
# run = cors.add(app.router.add_resource("/run"))
# cors.add(run.add_route("GET", handleRun))
#
# sio.attach(app)
#
# app.router.add_static('/', './build/')
#
# if __name__ == '__main__':
#     web.run_app(app)
