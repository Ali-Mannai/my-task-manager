# Dockerfile for .NET API
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["TaskManager.API/TaskManager.API.csproj", "TaskManager.API/"]
RUN dotnet restore "TaskManager.API/TaskManager.API.csproj"
COPY . .
WORKDIR "/src/TaskManager.API"
RUN dotnet build "TaskManager.API.csproj" -c Release -o /app/build
RUN dotnet publish "TaskManager.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TaskManager.API.dll"]
