protoc -I=.\ --ts_out=..\src\packet packet.proto

protoc -I=.\ --csharp_out=..\..\Client\Assets\01.Scripts\Packet packet.proto

pause