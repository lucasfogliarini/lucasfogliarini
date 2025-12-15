# ====================================================================
#  PROFILE DO POWERSHELL - Lucas Fogliarini
# ====================================================================
#  Execute este comando para criar/carregar este profile forçado:
#  New-Item -ItemType File -Path $PROFILE -Force | Out-Null; Invoke-WebRequest "https://raw.githubusercontent.com/lucasfogliarini/lucasfogliarini/main/profile.ps1" -OutFile $PROFILE; . $PROFILE; Get-Command -CommandType Function | Where-Object { $_.Name -in @('nodes','pods','services','gs','d','k') }
# ====================================================================

function nodes { kubectl get nodes -o wide @args }
function services { kubectl get services -o wide @args }
function pods { kubectl get pods -o wide @args }
function d { docker @args }
function k { kubectl @args }
function gs { git status @args }
