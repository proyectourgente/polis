// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var probabilities =  [[0.5357142857142857,0.42857142857142855,0.5185185185185185,0.1111111111111111,0.1724137931034483,0.4074074074074074,0.16666666666666666,0.10344827586206896,0.06896551724137931,0,0.038461538461538464,0.10344827586206896,0.14814814814814814,0.3103448275862069,0,0.10344827586206896,0,0.3448275862068966,0.1111111111111111,0.19230769230769232,0.04,0.08695652173913043,0.17391304347826086,0.25,0.45,0.18181818181818182,0,0.05555555555555555,0.2222222222222222,0.13333333333333333,0.1875,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0.42857142857142855,0.75,0.7037037037037037,0.07407407407407407,0.06896551724137931,0.4444444444444444,0.26666666666666666,0.1724137931034483,0.06896551724137931,0,0.11538461538461539,0.06896551724137931,0.2962962962962963,0.27586206896551724,0,0.13793103448275862,0,0.41379310344827586,0.1111111111111111,0.2692307692307692,0.12,0.08695652173913043,0.30434782608695654,0.25,0.65,0.13636363636363635,0.09523809523809523,0.16666666666666666,0.3333333333333333,0.26666666666666666,0.25,0.14285714285714285,0.2222222222222222,0.2222222222222222],[0.5,0.6785714285714286,0.8888888888888888,0.07407407407407407,0.1724137931034483,0.5185185185185185,0.3,0.13793103448275862,0.06896551724137931,0,0.11538461538461539,0.10344827586206896,0.3333333333333333,0.3793103448275862,0,0.20689655172413793,0,0.5172413793103449,0.1111111111111111,0.2692307692307692,0.08,0.13043478260869565,0.391304347826087,0.2,0.75,0.18181818181818182,0.14285714285714285,0.16666666666666666,0.2222222222222222,0.3333333333333333,0.1875,0.14285714285714285,0.2222222222222222,0.2222222222222222],[0.10714285714285714,0.07142857142857142,0.07407407407407407,0.1111111111111111,0.06896551724137931,0.07407407407407407,0.03333333333333333,0.034482758620689655,0,0,0.038461538461538464,0.034482758620689655,0.037037037037037035,0.06896551724137931,0,0.034482758620689655,0,0.06896551724137931,0.037037037037037035,0.07692307692307693,0.04,0.043478260869565216,0,0.1,0.05,0.045454545454545456,0,0,0.1111111111111111,0.06666666666666667,0.125,0.07142857142857142,0,0],[0.17857142857142858,0.07142857142857142,0.18518518518518517,0.07407407407407407,0.2413793103448276,0.18518518518518517,0.06666666666666667,0.034482758620689655,0,0,0,0.034482758620689655,0.1111111111111111,0.1724137931034483,0,0.034482758620689655,0,0.13793103448275862,0.037037037037037035,0.11538461538461539,0.04,0.043478260869565216,0.13043478260869565,0.05,0.1,0.09090909090909091,0,0,0.05555555555555555,0,0.0625,0,0,0],[0.39285714285714285,0.42857142857142855,0.5185185185185185,0.07407407407407407,0.1724137931034483,0.5925925925925926,0.13333333333333333,0.10344827586206896,0.06896551724137931,0,0.038461538461538464,0.06896551724137931,0.18518518518518517,0.2413793103448276,0,0.06896551724137931,0,0.3793103448275862,0.07407407407407407,0.19230769230769232,0.12,0.08695652173913043,0.2608695652173913,0.15,0.4,0.22727272727272727,0.09523809523809523,0.1111111111111111,0.16666666666666666,0.13333333333333333,0.1875,0.07142857142857142,0.2222222222222222,0.2222222222222222],[0.17857142857142858,0.2857142857142857,0.3333333333333333,0.037037037037037035,0.06896551724137931,0.14814814814814814,0.3333333333333333,0.034482758620689655,0,0,0,0.10344827586206896,0.14814814814814814,0.1724137931034483,0,0.06896551724137931,0,0.1724137931034483,0.037037037037037035,0.038461538461538464,0.04,0,0.21739130434782608,0.05,0.25,0.045454545454545456,0.047619047619047616,0.1111111111111111,0.1111111111111111,0.06666666666666667,0.125,0,0.2222222222222222,0.2222222222222222],[0.10714285714285714,0.17857142857142858,0.14814814814814814,0.037037037037037035,0.034482758620689655,0.1111111111111111,0.03333333333333333,0.1724137931034483,0.034482758620689655,0,0,0.034482758620689655,0.07407407407407407,0,0,0.034482758620689655,0,0.10344827586206896,0.07407407407407407,0.07692307692307693,0.04,0,0,0.15,0.1,0.09090909090909091,0,0,0.1111111111111111,0,0.0625,0,0,0],[0.07142857142857142,0.07142857142857142,0.07407407407407407,0,0,0.07407407407407407,0,0.034482758620689655,0.10344827586206896,0,0,0,0,0,0,0,0,0.06896551724137931,0,0.038461538461538464,0,0,0,0.05,0.1,0.045454545454545456,0,0,0.05555555555555555,0.06666666666666667,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.03571428571428571,0.10714285714285714,0.1111111111111111,0.037037037037037035,0,0.037037037037037035,0,0,0,0,0.11538461538461539,0,0.037037037037037035,0.06896551724137931,0,0,0,0.10344827586206896,0,0.07692307692307693,0,0.08695652173913043,0.043478260869565216,0.05,0.1,0,0,0,0.1111111111111111,0.13333333333333333,0.0625,0.07142857142857142,0,0],[0.10714285714285714,0.07142857142857142,0.1111111111111111,0.037037037037037035,0.034482758620689655,0.07407407407407407,0.1,0.034482758620689655,0,0,0,0.13793103448275862,0.037037037037037035,0.06896551724137931,0,0.034482758620689655,0,0.06896551724137931,0.037037037037037035,0,0,0,0,0.05,0.05,0,0,0,0,0,0,0,0,0],[0.14285714285714285,0.2857142857142857,0.3333333333333333,0.037037037037037035,0.10344827586206896,0.18518518518518517,0.13333333333333333,0.06896551724137931,0,0,0.038461538461538464,0.034482758620689655,0.37037037037037035,0.13793103448275862,0,0.13793103448275862,0,0.13793103448275862,0.07407407407407407,0.038461538461538464,0.08,0.043478260869565216,0.17391304347826086,0.05,0.25,0.09090909090909091,0.09523809523809523,0.1111111111111111,0.05555555555555555,0.13333333333333333,0.0625,0.07142857142857142,0,0],[0.32142857142857145,0.2857142857142857,0.4074074074074074,0.07407407407407407,0.1724137931034483,0.25925925925925924,0.16666666666666666,0,0,0,0.07692307692307693,0.06896551724137931,0.14814814814814814,0.4482758620689655,0,0.06896551724137931,0,0.27586206896551724,0,0.19230769230769232,0,0.08695652173913043,0.21739130434782608,0.1,0.4,0.09090909090909091,0,0.05555555555555555,0.16666666666666666,0.06666666666666667,0.125,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.10714285714285714,0.14285714285714285,0.2222222222222222,0.037037037037037035,0.034482758620689655,0.07407407407407407,0.06666666666666667,0.034482758620689655,0,0,0,0.034482758620689655,0.14814814814814814,0.06896551724137931,0,0.20689655172413793,0,0.10344827586206896,0.037037037037037035,0,0.04,0,0.08695652173913043,0,0.25,0.045454545454545456,0.09523809523809523,0.1111111111111111,0,0.06666666666666667,0,0.07142857142857142,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.35714285714285715,0.42857142857142855,0.5555555555555556,0.07407407407407407,0.13793103448275862,0.4074074074074074,0.16666666666666666,0.10344827586206896,0.06896551724137931,0,0.11538461538461539,0.06896551724137931,0.14814814814814814,0.27586206896551724,0,0.10344827586206896,0,0.6206896551724138,0.07407407407407407,0.2692307692307692,0.04,0.13043478260869565,0.30434782608695654,0.2,0.5,0.18181818181818182,0.047619047619047616,0.1111111111111111,0.2222222222222222,0.2,0.125,0.14285714285714285,0.1111111111111111,0.1111111111111111],[0.10714285714285714,0.10714285714285714,0.1111111111111111,0.037037037037037035,0.034482758620689655,0.07407407407407407,0.03333333333333333,0.06896551724137931,0,0,0,0.034482758620689655,0.07407407407407407,0,0,0.034482758620689655,0,0.06896551724137931,0.14814814814814814,0.038461538461538464,0.04,0,0,0.1,0.05,0.09090909090909091,0.047619047619047616,0,0.05555555555555555,0.06666666666666667,0.0625,0,0,0],[0.17857142857142858,0.25,0.25925925925925924,0.07407407407407407,0.10344827586206896,0.18518518518518517,0.03333333333333333,0.06896551724137931,0.034482758620689655,0,0.07692307692307693,0,0.037037037037037035,0.1724137931034483,0,0,0,0.2413793103448276,0.037037037037037035,0.38461538461538464,0.04,0.08695652173913043,0.13043478260869565,0.15,0.35,0.09090909090909091,0,0,0.16666666666666666,0.2,0.125,0.07142857142857142,0,0],[0.03571428571428571,0.10714285714285714,0.07407407407407407,0.037037037037037035,0.034482758620689655,0.1111111111111111,0.03333333333333333,0.034482758620689655,0,0,0,0,0.07407407407407407,0,0,0.034482758620689655,0,0.034482758620689655,0.037037037037037035,0.038461538461538464,0.12,0,0.08695652173913043,0.05,0.1,0.045454545454545456,0.09523809523809523,0.1111111111111111,0.05555555555555555,0,0.125,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0.07142857142857142,0.07142857142857142,0.1111111111111111,0.037037037037037035,0.034482758620689655,0.07407407407407407,0,0,0,0,0.07692307692307693,0,0.037037037037037035,0.06896551724137931,0,0,0,0.10344827586206896,0,0.07692307692307693,0,0.17391304347826086,0.043478260869565216,0.05,0.1,0.045454545454545456,0,0,0.05555555555555555,0.13333333333333333,0.0625,0.07142857142857142,0,0],[0.14285714285714285,0.25,0.3333333333333333,0,0.10344827586206896,0.2222222222222222,0.16666666666666666,0,0,0,0.038461538461538464,0,0.14814814814814814,0.1724137931034483,0,0.06896551724137931,0,0.2413793103448276,0,0.11538461538461539,0.08,0.043478260869565216,0.43478260869565216,0.05,0.35,0.045454545454545456,0.09523809523809523,0.16666666666666666,0.05555555555555555,0.13333333333333333,0.125,0.07142857142857142,0.2222222222222222,0.2222222222222222],[0.17857142857142858,0.17857142857142858,0.14814814814814814,0.07407407407407407,0.034482758620689655,0.1111111111111111,0.03333333333333333,0.10344827586206896,0.034482758620689655,0,0.038461538461538464,0.034482758620689655,0.037037037037037035,0.06896551724137931,0,0,0,0.13793103448275862,0.07407407407407407,0.11538461538461539,0.04,0.043478260869565216,0.043478260869565216,0.3,0.2,0.09090909090909091,0,0,0.2222222222222222,0.13333333333333333,0.125,0.07142857142857142,0,0],[0.32142857142857145,0.4642857142857143,0.5555555555555556,0.037037037037037035,0.06896551724137931,0.2962962962962963,0.16666666666666666,0.06896551724137931,0.06896551724137931,0,0.07692307692307693,0.034482758620689655,0.18518518518518517,0.27586206896551724,0,0.1724137931034483,0,0.3448275862068966,0.037037037037037035,0.2692307692307692,0.08,0.08695652173913043,0.30434782608695654,0.2,0.85,0.18181818181818182,0.14285714285714285,0.16666666666666666,0.2777777777777778,0.3333333333333333,0.1875,0.14285714285714285,0.2222222222222222,0.2222222222222222],[0.14285714285714285,0.10714285714285714,0.14814814814814814,0.037037037037037035,0.06896551724137931,0.18518518518518517,0.03333333333333333,0.06896551724137931,0.034482758620689655,0,0,0,0.07407407407407407,0.06896551724137931,0,0.034482758620689655,0,0.13793103448275862,0.07407407407407407,0.07692307692307693,0.04,0.043478260869565216,0.043478260869565216,0.1,0.2,0.2727272727272727,0.047619047619047616,0,0.16666666666666666,0.06666666666666667,0.125,0,0.1111111111111111,0.1111111111111111],[0,0.07142857142857142,0.1111111111111111,0,0,0.07407407407407407,0.03333333333333333,0,0,0,0,0,0.07407407407407407,0,0,0.06896551724137931,0,0.034482758620689655,0.037037037037037035,0,0.08,0,0.08695652173913043,0,0.15,0.045454545454545456,0.19047619047619047,0.1111111111111111,0,0.06666666666666667,0.0625,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0.03571428571428571,0.10714285714285714,0.1111111111111111,0,0,0.07407407407407407,0.06666666666666667,0,0,0,0,0,0.07407407407407407,0.034482758620689655,0,0.06896551724137931,0,0.06896551724137931,0,0,0.08,0,0.13043478260869565,0,0.15,0,0.09523809523809523,0.16666666666666666,0,0,0.0625,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0.14285714285714285,0.21428571428571427,0.14814814814814814,0.07407407407407407,0.034482758620689655,0.1111111111111111,0.06666666666666667,0.06896551724137931,0.034482758620689655,0,0.07692307692307693,0,0.037037037037037035,0.10344827586206896,0,0,0,0.13793103448275862,0.037037037037037035,0.11538461538461539,0.04,0.043478260869565216,0.043478260869565216,0.2,0.25,0.13636363636363635,0,0,0.3888888888888889,0.13333333333333333,0.1875,0.07142857142857142,0.1111111111111111,0.1111111111111111],[0.07142857142857142,0.14285714285714285,0.18518518518518517,0.037037037037037035,0,0.07407407407407407,0.03333333333333333,0,0.034482758620689655,0,0.07692307692307693,0,0.07407407407407407,0.034482758620689655,0,0.034482758620689655,0,0.10344827586206896,0.037037037037037035,0.11538461538461539,0,0.08695652173913043,0.08695652173913043,0.1,0.25,0.045454545454545456,0.047619047619047616,0,0.1111111111111111,0.4666666666666667,0.0625,0.07142857142857142,0,0],[0.10714285714285714,0.14285714285714285,0.1111111111111111,0.07407407407407407,0.034482758620689655,0.1111111111111111,0.06666666666666667,0.034482758620689655,0,0,0.038461538461538464,0,0.037037037037037035,0.06896551724137931,0,0,0,0.06896551724137931,0.037037037037037035,0.07692307692307693,0.08,0.043478260869565216,0.08695652173913043,0.1,0.15,0.09090909090909091,0.047619047619047616,0.05555555555555555,0.16666666666666666,0.06666666666666667,0.25,0.07142857142857142,0.2222222222222222,0.2222222222222222],[0.03571428571428571,0.07142857142857142,0.07407407407407407,0.037037037037037035,0,0.037037037037037035,0,0,0,0,0.038461538461538464,0,0.037037037037037035,0.034482758620689655,0,0.034482758620689655,0,0.06896551724137931,0,0.038461538461538464,0.04,0.043478260869565216,0.043478260869565216,0.05,0.1,0,0.047619047619047616,0.05555555555555555,0.05555555555555555,0.06666666666666667,0.0625,0.14285714285714285,0,0],[0.03571428571428571,0.07142857142857142,0.07407407407407407,0,0,0.07407407407407407,0.06666666666666667,0,0,0,0,0,0,0.034482758620689655,0,0,0,0.034482758620689655,0,0,0.04,0,0.08695652173913043,0,0.1,0.045454545454545456,0.047619047619047616,0.05555555555555555,0.05555555555555555,0,0.125,0,0.2222222222222222,0.2222222222222222],[0.03571428571428571,0.07142857142857142,0.07407407407407407,0,0,0.07407407407407407,0.06666666666666667,0,0,0,0,0,0,0.034482758620689655,0,0,0,0.034482758620689655,0,0,0.04,0,0.08695652173913043,0,0.1,0.045454545454545456,0.047619047619047616,0.05555555555555555,0.05555555555555555,0,0.125,0,0.2222222222222222,0.2222222222222222]]

export default probabilities;
