//function to calculate the netsalary
function calcNetSalary(basicSalary){
    //function to calculate the Payee
    function calcPayee(basicSalary){
        let payee=0;
        if(basicSalary<=24000){
             return payee=basicSalary*0.1;
        }
        else if(basicSalary>24000 && basicSalary<=32,333){
            return payee=basicSalary*0.25;
        }
        else if(basicSalary>=32334 && basicSalary<=500000){
            return payee=basicSalary*0.3;
        }
        else if(basicSalary>500000 && basicSalary<=800000){
            return payee=basicSalary*0.325;
        }
        else {
           return payee=basicSalary*0.35;
        }
        
    }
    calcPayee()
    //function to calculate the nhif deduction
        function calcNhifDed(basicSalary){
        let nhifDed=0;
        if(basicSalary<=5999){
           return nhifDed=150;
        }else if(basicSalary>5999 && basicSalary<=7999){
            console.log(nhifDed=300);
        }
        else if(basicSalary>=8000 && basicSalary<=11999){
            return nhifDed=400;
        }
        else if(basicSalary>=12000 && basicSalary<=14999){
            return nhifDed=500;
        }
        else if(basicSalary>=15000 && basicSalary<=19999){
            return nhifDed=600;
        }
        else if(basicSalary>=20000 && basicSalary<=24999){
            return nhifDed=750;
        }
        else if(basicSalary>=25000 && basicSalary<=29999){
            return nhifDed=850;
        }
        else if(basicSalary>=30000 && basicSalary<=34999){
            return nhifDed=900;
        }
        else if(basicSalary>=35000 && basicSalary<=3999){
            return nhifDed=950;
        }
        else if(basicSalary>=40000 && basiSalary<=44999){
            return nhifDed=1000;
        }
        else if(basicSalary>=45000 && basicSalary<=49999){
            return nhifDed=1100
        }
        else if(basicSalary>=50000 && basicSalary<=59999){
            return nhifDed=1200
        }
        else if(basicSalary>=60000 && basicSalary<=69999){
            return nhifDed=1300
        }
        else if(basicSalary>=70000 && basicSalary<=79999){
            return nhifDed=1400;
        }
        else if(basicSalary>=80000 && basicSalary<=89999){
            return nhifDed=1500
        }
        else if(basicSalary>=90000 && basicSalary<=99999){
           return nhifDed=1600;
        }
        else{
           return nhifDed=1700;
        }
        calcNhifDed(100000)
    }
    //functuion to calculate the nssf deduction
    function calcNssfDed(pensionScheme,maxPensionablePay){
        let maxContributions=0
        if (pensionScheme>1){
            return "tier2"
        }
        else{
            "tier1";
        }
        if(tier1){
           maxPensionablePay<=6000
           maxContributions=maxPensionablePay*0.06
            }
            else{
                console.log(maxPensionablePay>6000 && maxPensionablePay<=18000)
             maxContributions=maxPensionablePay*0.12
            return maxContributions
            }
            calcNssfDed(1,100000)
        }
        
            
            function calcHousingFund(basicSalary){
                let housingLevy=basicSalary*0.015
               return housingLevy
            }
            calcHousingFund(100000)
        
         let deductions=interest+nhifDed+payee+maxContributions+housingLevy;
         let netSalary=basicSalary-deductions;
         return netSalary;
    
    }
        calcNetSalary()