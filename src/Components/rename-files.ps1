# Define la función para cambiar la capitalización de las letras
function Rename-Item-Capitalized {
    param(
        [string]$path
    )

    # Si el nombre no es 'assets', cambiar a capital letter
    if ($path.ToLower() -ne "assets") {
        # Correcto uso de Substring() para poner la primera letra en mayúscula
        $newName = ($path.Substring(0,1).ToUpper() + $path.Substring(1).ToLower())
        Rename-Item -Path $path -NewName $newName
        Write-Host "Renamed: $path -> $newName"
        Start-Sleep -Seconds 1  # Añadir delay de 1 segundo entre renombramientos
    }
}

# Directorio donde están tus archivos y carpetas (ajústalo a tu ruta)
$rootDir = "C:\Users\Saiko\Desktop\development\TWD\Aniview\src\Components"

# Cambiar nombres de archivos
Get-ChildItem -Path $rootDir -Recurse -File | ForEach-Object {
    Rename-Item-Capitalized $_.FullName
}

# Cambiar nombres de carpetas
Get-ChildItem -Path $rootDir -Recurse -Directory | ForEach-Object {
    Rename-Item-Capitalized $_.FullName
}
