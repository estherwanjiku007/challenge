//function to calculate the netsalary
function calcNetSalary(basicSalary){
         calcNhifDed()
          calcNssfDed()
          calcNhifDed()
          calcHousingFund()
    let deductions=nhifDed+maxContributions+housingLevy;
    let netSalary=basicSalary-deductions;
    return netSalary;

}
   calcNetSalary()
    //function to calculate the Payee
    function calcPayee(basicSalary){
        let payee;
        if(basicSalary<=24000){
              payee=basicSalary*0.1
              return payee
        }
        else if(basicSalary>24000 && basicSalary<=32,333){
             payee=basicSalary*0.25;
             return payee
        }
        else if(basicSalary>=32334 && basicSalary<=500000){
             payee=basicSalary*0.3;
             return payee
        }
        else if(basicSalary>500000 && basicSalary<=800000){
             payee=basicSalary*0.325;
             return payee
        }
        else {
            payee=basicSalary*0.35;
            return payee
        }
        
    }
    calcPayee()
    //function to calculate the nhif deduction
        function calcNhifDed(basicSalary){
        let nhifDed=0;
        if(basicSalary<=5999){
            nhifDed=150
            return nhifDed;
        }else if(basicSalary>5999 && basicSalary<=7999){
            nhifDed=300
            return nhifDed;
        }
        else if(basicSalary>=8000 && basicSalary<=11999){
            nhifDed=400
            return nhifDed
        } 
        else if(basicSalary>=12000 && basicSalary<=14999){
             nhifDed=500
             return nhifDed;
        }
        else if(basicSalary>=15000 && basicSalary<=19999){
             nhifDed=600
             return nhifDed
        }
        else if(basicSalary>=20000 && basicSalary<=24999){
             nhifDed=750;
             return nhifDed
        }
        else if(basicSalary>=25000 && basicSalary<=29999){
             nhifDed=850
             return nhifDed
        }
        else if(basicSalary>=30000 && basicSalary<=34999){
             nhifDed=900
             return nhifDed
        }
        else if(basicSalary>=35000 && basicSalary<=3999){
             nhifDed=950
             return nhifDed
        }
        else if(basicSalary>=40000 && basicSalary<=44999){
             nhifDed=1000
             return nhifDed
        }
        else if(basicSalary>=45000 && basicSalary<=49999){
             nhifDed=1100
             return nhifDed
        }
        else if(basicSalary>=50000 && basicSalary<=59999){
             nhifDed=1200
             return nhifDed
        }
        else if(basicSalary>=60000 && basicSalary<=69999){
            nhifDed=1300
            return netSalary
        }
        else if(basicSalary>=70000 && basicSalary<=79999){
             nhifDed=1400
             return nhifDed
        }
        else if(basicSalary>=80000 && basicSalary<=89999){
             nhifDed=1500
             return nhifDed
        }
        else if(basicSalary>=90000 && basicSalary<=99999){
            nhifDed=1600
            return nhifDed
        }
        else{
            nhifDed=1700
            return nhifDed
        }
        
    }
    calcNhifDed()
    //functuion to calculate the nssf deduction
    function calcNssfDed(pensionScheme,maxPensionablePay){
        let maxContributions=0
        if (pensionScheme>1){
           // return "tier2"
           maxContributions=maxPensionablePay*0.06
           return maxContributions
        }
        else{
           // "tier1";
           maxContributions=maxPensionablePay*0.12
           return maxContributions
        }
            
        }
        calcNssfDed()
        
            
            function calcHousingFund(basicSalary){
                let housingLevy=basicSalary*0.015
               return housingLevy
            }
            calcHousingFund()
           /* function calcNetSalary(basicSalary){
               calcNhifDed()
               calcNssfDed()
               calcNhifDed()
               calcHousingFund()
         let deductions=nhifDed+maxContributions+housingLevy;
         let netSalary=basicSalary-deductions;
         return netSalary;
    
    }
        calcNetSalary()*/